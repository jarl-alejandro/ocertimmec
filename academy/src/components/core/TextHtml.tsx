import parse from 'html-react-parser';

export default function TextHtml ({ value }: { value: string }) {
    return parse(value);
}
