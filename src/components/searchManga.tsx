import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SearchMangaProps } from "../models/searchMangaProps";

interface FormValues {
  search: string;
}

const SearchManga: FC<SearchMangaProps> = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    navigate(`./search/${values.search}`);
  };

  return (
    <div className="flex justify-center m-4 rounded-md overflow-hidden bg-neutral-100">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="flex items-center p-0">
            <Field
              className="w-full px-2 py-1 text-black text-sm border-none focus:outline-none"
              id="search"
              name="search"
              placeholder="Search manga"
            />
            <button
              className="text-2xl text-center"
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
