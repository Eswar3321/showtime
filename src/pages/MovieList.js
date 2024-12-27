import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components"

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  //eslint-disable-next-line
  const pageTitle = useTitle(`${title}`);
  
  return (
    <main>
      <section className=" mx-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
            { movies.map((movie) => (
              < Card key={movie.id} movie={movie}/>
            ))}
        </div>
      </section>
    </main>
    )
}
