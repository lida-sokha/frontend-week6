export default function Place({ student }) { // Receive the whole student object
        return (
        <div className="card">
            <h4>{student.title[0]}</h4>
            <small>{student.title.slice(1).join(", ")}</small>
            <p>
            Try something you've always been curious about, whether it's
            painting, cooking, coding, gardening, or playing a musical
            instrument. Hobbies can be a great way to relax and discover new
            passions
            </p>
            <img src={student.image} alt={student.image.alt} /> {/* Access image.alt from the student object */}
        </div>
        );
    }