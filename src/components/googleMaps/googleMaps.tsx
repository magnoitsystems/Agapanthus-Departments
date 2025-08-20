export default function GoogleMaps() {
    return (
        <main>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.678249431084!2d-59.0839682!3d-37.3123816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9590e0148e703209%3A0x46a9544f6b65c4e6!2sHudson%202680%2C%20B7000%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1692576012345!5m2!1ses-419!2sar"
                width="100%"
                height="400"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </main>

    )
}