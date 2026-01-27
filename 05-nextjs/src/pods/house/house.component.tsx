import * as viewModel from './house.vm';
import classes from './house.module.css';
import Link from 'next/link';
import { ReviewItem } from './components';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <div className={classes.root}>
      {/* Back btn */}
      <Link href="/" className={classes.backButton}>
        ← Volver al listado
      </Link>

      {/* Title + img */}
      <div className={classes.title}>
        <h2 className={classes.name}>{house.name}</h2>
        <span className={classes.price}>{house.priceFormatted}</span>
      </div>
      <div className={classes.mainInfo}>
        <div className={classes.imageColumn}>
          <figure className={classes.imageContainer}>
            <img
              src={house.imageUrl}
              alt={house.name}
              className={classes.image}
              loading="lazy"
            />
          </figure>
        </div>
        <div className={classes.infoColumn}>
          {/* Description */}
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Descripción</h2>
            <p className={classes.description}>{house.description}</p>
          </section>

          {/* Details */}
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Detalles de la casa</h2>
            <div className={classes.detailsGrid}>
              <div className={classes.detailItem}>
                <span className={classes.detailLabel}>Dirección: </span>
                <span className={classes.detailValue}>{house.location}</span>
              </div>
              <div className={classes.detailItem}>
                <span className={classes.detailLabel}>Habitaciones: </span>
                <span className={classes.detailValue}>{house.bedrooms}</span>
              </div>
              <div className={classes.detailItem}>
                <span className={classes.detailLabel}>Baños: </span>
                <span className={classes.detailValue}>{house.bathrooms}</span>
              </div>
            </div>
          </section>

          {/* Amenities */}
          {house.amenities && house.amenities.length > 0 && (
            <section className={classes.section}>
              <h2 className={classes.sectionTitle}>Comodidades</h2>
              <ul className={classes.amenitiesList}>
                {house.amenities.map((amenity, index) => (
                  <li key={index} className={classes.amenityItem}>
                    ✅ {amenity}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Reviews */}
      {house.reviews && house.reviews.length > 0 && (
        <section className={classes.reviewsSection}>
          <div className={classes.sectionTop}>
            <h2 className={classes.sectionTitle}>Reviews</h2>
            <span className={classes.rating}>
              ⭐ {house.ratingAverage.toFixed(1)}/5
            </span>
          </div>
          <div className={classes.reviewsList}>
            {house.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
