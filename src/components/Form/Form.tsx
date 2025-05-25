import { FiSearch } from "react-icons/fi";
import css from "./Form.module.css";
import toast from "react-hot-toast";
import { useEffect, useState, type ChangeEvent } from "react";

interface FormProps {
  onSubmit: (query: string) => void;
  successRequest: boolean;
}

export default function Form({ onSubmit, successRequest }: FormProps) {
  const [query, setQuery] = useState(() => {
    const savedQuery = window.localStorage.getItem("query");
    try {
      return savedQuery ? JSON.parse(savedQuery) : "";
    } catch {
      return "";
    }
  });

  const handleSubmit = (formData: FormData) => {
    const query = formData.get("search") as string;
    if (!query || query.trim() === "") {
      toast.error("Please enter your search query.");
      return;
    }
    onSubmit(query.trim());
  };

  useEffect(() => {
    if (successRequest) {
      setQuery("");
    }
  }, [successRequest]);

  useEffect(() => {
    if (query !== "") {
      window.localStorage.setItem("query", JSON.stringify(query));
    } else {
      window.localStorage.removeItem("query");
    }
  }, [query]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setQuery(value);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
        value={query}
        onChange={handleChange}
      />

      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
