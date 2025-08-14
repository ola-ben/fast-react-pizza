function Footer() {
  const hour = new Date().getHours();
  const openingHour = 12;
  const closingHour = 22;

  const isOpen = hour >= openingHour && hour <= closingHour;

  console.log(hour);

  return (
    <footer className="footer">
      {/* {isOpen && (
        <p>
          we're open from {openingHour}:00 to {closingHour}:00. come visit us or
          orderr online
        </p>
      )}

      {!isOpen && (
        <p>
          we are closed for the day! we open {openingHour}:00 come again
          tommorow
        </p>
      )} */}
      {isOpen ? (
        <p>
          we're open from {openingHour}:00 to {closingHour}:00. come visit us or
          orderr online
        </p>
      ) : (
        <p>
          we are closed for the day! we open {openingHour}:00 come again
          tommorow
        </p>
      )}
      <button className="btn">order</button>
    </footer>
  );
}

export default Footer;
