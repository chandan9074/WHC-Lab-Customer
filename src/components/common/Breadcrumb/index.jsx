"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NextBreadcrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);

    // To Uppercase the Breadcrumb item
    const toPascalCase = (string) => (string ? string : "");

    // Breadcrumb item array
    const breadcrumbPath = () => {
        const removeQuestionMark = paths.replace(/\?/g, "/");
        const removeEquals = removeQuestionMark.replace(/\=/g, "/");
        const pathToPascalCase = toPascalCase(removeEquals);

        return pathToPascalCase.split("/").slice(1);
    };

    return (
        <ul className="flex breadcrumb container mx-auto py-6 font-poppins">
            <li>
                <Link href="/" className="text-sm font-normal capitalize">
                    <span className={pathNames.length === 0 ? 'text-brand-blue-800' : 'text-neutral-200 hover:brand-blue-800'}>Home</span>
                </Link>
            </li>
            {pathNames.map((path, index) => (
                <li key={index} className="flex items-center capitalize">
                    <span className="mx-2 text-neutral-200">/</span>
                    <Link href={`/${path}`}>
                        <span className={index === pathNames.length - 1 ? 'text-brand-blue-800 font-medium' : 'text-neutral-200 hover:brand-blue-800'}>{path}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NextBreadcrumb;
