import Link from "next/link";


interface SelectItemProps {
        href: string,
        children: string
};

const SECITEM: React.FC<SelectItemProps> = ({
        href,
        children
}) => (
        <Link href={href}
                className="
                        h-50
                        w-72
                        bg-red-500
                        rounded-2xl
                        m-5
                        text-center
                        text-4xl
                        content-center
                        duration-250
                        hover:font-bold
                        hover:shadow-xl
                        hover:shadow-black/70
                "
        >
                {children}
        </Link>
);

export default SECITEM;