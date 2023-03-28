import { Form, Formik, FormikHelpers } from "formik";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FormValues, SearchMangaProps } from "../props/searchMangaProps";

export const SearchManga = (props: SearchMangaProps): JSX.Element => {
  const { value, onChange } = props;

  const navigate = useNavigate();

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ): Promise<void> => {
    navigate(`./search/${values.search}`);
    setSubmitting(false);
  };

  return (
    <div className="bg-gray-800 rounded-full m-4 flex items-center justify-center">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="flex items-center p-2">
            <input
              className="w-full px-2 py-1 text-gray-300 text-sm border-none bg-transparent focus:outline-none"
              id="search"
              name="search"
              placeholder="Search manga"
              value={value}
              onChange={onChange}
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
