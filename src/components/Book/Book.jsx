import { Link, NavLink } from "react-router-dom";
import WhatsAppIcon from "../whatsappicon/WhatsAppIcon";

const Book = ({ book }) => {
  const { cover, title, author, download_link } = book;
  return (
    <div>
      <div className="card w-full h-full shadow-2xl bg-yellow-800 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cover} alt="books" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <div className="flex flex-col items-center flex-grow">
            <h2 className="card-title">{title}</h2>
            <p>{author}</p>
          </div>

          <div className="card-actions">
            <Link to={download_link}>
              {" "}
              <button className="btn bg-green-600 text-white">
                Download Now
              </button>
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Book;
