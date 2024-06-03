import { useContext } from "react";
import { WordDataContext } from "../contexts/WordDataContext";
import Input from "./Input";

export default function Search() {

    // Getting outputSection from WordDataContext.
    const { outputSection } = useContext(WordDataContext);

    return (
        <>
        <Input />
        {outputSection}
        </>
    )
}