import { ReactNode } from "react";

type Props = {
    children:ReactNode;
    className?:string;
}

export default function SectionDescription({
children,
className=""
}:Props){

return(

<p
className={`
mt-4
text-lg
leading-8
text-muted
${className}
`}
>

{children}

</p>

);

}