export default function Place({id,title, image, alt}) {
    return (
        <li key="student-category" className="student-item">
            <button>
            {/* <img src="the place image src" alt="the place image alt" /> */}
            <img src={image} alt={alt}></img>
            <h3>"the place title"</h3>
            </button>
        </li>
        );
    }