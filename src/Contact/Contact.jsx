import css from "../Contact/Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.wrap}>
      <div className={css.info}>
        <p className={css.text}>
          <BiSolidUser />
          {name}
        </p>
        <p className={css.text}>
          <BiSolidPhone />
          {number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
