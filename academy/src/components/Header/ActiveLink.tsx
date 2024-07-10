import Link from 'next/link';
import classNames from "classnames";

const ActiveLink = ({ children, href, activeClassName, className, ...props }: any) => {

    return (
        <Link href={href} className={classNames(className)}>
            {children}
        </Link>
    );
};

export default ActiveLink;
