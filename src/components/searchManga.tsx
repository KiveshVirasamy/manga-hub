import { Field, Form, Formik } from "formik";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface FormValues {
  search: string;
}

export default function SearchManga() {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues) => {
    navigate(`./search/${values.search}`);
  };

  return (
    <div className="m-4 flex h-6 w-fit items-center justify-center overflow-hidden rounded-md bg-neutral-100">
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className="mt-1 flex h-full justify-center p-0">
          <Field
            className="text-black my-auto -mt-1 h-7 w-3/4 border-none bg-neutral-100 py-0 px-1 text-xs"
            id="search"
            name="search"
            placeholder="Search manga"
          />
          <button
            className="-mt-1 w-1/4 text-center text-2xl"
            type="submit"
            aria-label="search-button"
          >
            <IoMdSearch className="m-auto" />
          </button>
        </Form>
      </Formik>
    </div>
  );
}
