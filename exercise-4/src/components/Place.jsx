export default function Place({ id, title, image, alt }) {
    return (
        <li>
            <button>
                <img src={image} alt={alt} />
                <h3>{title}</h3>
            </button>
          </li>
    );
}