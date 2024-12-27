import { useSearchParams } from 'react-router-dom'
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  
  const { data: movies } = useFetch(apiPath, queryTerm);
  //eslint-disable-next-line
  const pageTitle = useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className='py-7'>
        <p className="text-3xl text-grey-700 dark:text-white">{ movies.length === 0 ? `Not found '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
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
