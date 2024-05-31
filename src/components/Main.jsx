import Input from "./Input";

export default function Main({theme}) {

    return (
        <main className={`main ${theme}`}>
            <Input theme={theme} />
        </main>
    );
}