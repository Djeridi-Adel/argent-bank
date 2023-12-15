import "../../utils/style/feature.css"

function Feature({imgSrc, imgAlt, title, description}) {
    return (
        <div className="feature-item">
            <div className="card-header">
                <img src={imgSrc} alt={imgAlt} className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Feature