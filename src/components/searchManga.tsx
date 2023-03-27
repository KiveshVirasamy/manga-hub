import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SearchMangaProps } from "../props/searchMangaProps";

interface FormValues {
  search: string;
}

const SearchManga: FC<SearchMangaProps> = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    navigate(`./search/${values.search}`);
  };

  return (
    <div className="bg-gray-800 rounded-full m-4 flex items-center justify-center">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="flex items-center p-2">
            <Field
              className="w-full px-2 py-1 text-gray-300 text-sm border-none bg-transparent focus:outline-none"
              id="search"
              name="search"
              placeholder="Search manga"
            />
            <button
              className="text-2xl text-center text-white ml-2"
              type="submit"
              disabled={isSubmitting}
              aria-label="search-button"
            >
              <IoMdSearch className="m-auto" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchManga;
