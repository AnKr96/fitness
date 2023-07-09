import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";

const EXPROGRAMS = gql`
  query ExPrograms {
    programs {
      id
      name
      focus
      duration
    }
  }
`;

export default function Browser() {
  const { data, loading, error } = useQuery(EXPROGRAMS);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">
            Your content is still loading, time to warm up....
          </span>
        </div>
      </div>
    );
  }
  if (error) {
    return <h2>Something has gone wrong, prepare for a muscle-tear...</h2>;
  }

  const colorSchemes = [
    `bg-gradient-to-br from-orange to-rose`,
    `bg-gradient-to-br from-turquoise to-yellow`,
    `bg-gradient-to-br from-turquoise to-blue`,
  ];

  return (
    <DefaultLayout>
      <div className="flex-col justify-center mx-auto py-4">
        <h1 className=" mb-12 mt-14 font-bold">Browse</h1>
        {data?.programs?.map((program, index) => (
          <section key={program.id}>
            <Link
              to={`/exercisedetails/${program.id}`}
              key={`program-${index}`}
              className={`flex flex-col justify-center w-full rounded-3xl shadow-black h-48 my-4 py-4 ${
                colorSchemes[index % colorSchemes.length]
              }`}
            >
              <h2 className="text-xl font-bold">{program.name}</h2>
            </Link>
          </section>
        ))}
      </div>
    </DefaultLayout>
  );
}