"use client";

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { Subject } from 'rxjs'
import { TrainingCertificate } from '@/core/domain/TrainingCertification';
import classNames from "classnames";
import { debounceTime } from 'rxjs/operators';
import { isNullOrEmpty } from '@/utils/isNullOrEmpty';
import lang from '@/dictionaries/es.json';

interface SearchResults {
  list: TrainingCertificate[];
  emptyList: boolean;
}
interface Props {
  formClass: string;
  inputClass: string;
  buttonClass: string;
  iconClass: string;
}

export function InputSearch(props: Props) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [courses, setCourses] = useState<SearchResults>({
    list: [],
    emptyList: false
  } as SearchResults);
	const onChange$ = useRef<any>(null)
	const subscription = useRef<any>(null)

  useEffect(() => {
		onChange$.current = new Subject().pipe(debounceTime(500))
		subscription.current = onChange$.current.subscribe((debounced: string) => {
      if (!isNullOrEmpty(debounced)) {
        listCourses(debounced);
      }
		})

		return () => {
			if (subscription.current) subscription.current.unsubscribe()
		}
	}, [])

  async function listCourses(value: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search-courses?searchValue=${value}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const lists: TrainingCertificate[] = await response.json();

      setCourses({
        list: lists,
        emptyList: !lists.length
      } as SearchResults);
    } catch (exception) {
      setCourses({
        list: [],
        emptyList: true
      } as SearchResults);
    }
  }

  const handleChangeValue = (event: any) => {
    setSearchValue(event.target.value)
		onChange$.current.next(event.target.value)
  }

  const resetSearch = () => {
    setSearchValue("")
		onChange$.current.next("")
    setCourses({
      list: [],
      emptyList: true
    } as SearchResults);
  }

  return (
    <form className={props.formClass}>
      <div className="input-group">
        <input className={props.inputClass}
          type="search"
          placeholder={lang.search_training_certification}
          value={searchValue}
          onChange={handleChangeValue}
          aria-label="Search"/>
        <button
          className={props.buttonClass}
          type="submit">
          <i className={props.iconClass}></i>
        </button>
      </div>

      <div className={classNames("dropdown-menu", { 'show': !!searchValue?.trim().length })}>
        {courses.list.map((item) => (
          <Link key={item._id} onClick={resetSearch}
            href={`/training-certification/${item?._id}/${item?.type}`}
            style={{ marginInlineEnd: '1rem' }}
            className="dropdown-item"
          >
              { item.name }
              <span className="badge badge-dark"  style={{ marginInlineStart: '8px' }}>{item?.type === 'Training' ? 'Capacítate' : 'Certifícate'}</span>
          </Link>
        ))}

        {!!courses.emptyList && (
          <a className="dropdown-item" href="#">No se encontraron resultados</a>
        )}
      </div>
    </form>
  )
}