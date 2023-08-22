export default function Cabecalho(){
    return(
        <>
            <div className="container"></div>

            <Cabecalho/>

            <section>
                <p><a href="/">Home Page</a></p>
                    <button onClick={() => alert("Hello World")}>Click Me!</button>
            </section>

            <footer>
            <p>&copy; 2021, Vite.js and React.</p>
            </footer>
        </>
    )
}