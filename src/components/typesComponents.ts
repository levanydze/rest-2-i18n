export interface ReservationFormProps {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  quantity: string;
  message: string;
  send: string;
  thankYou: string;
  comfirmation: string;
}

export interface TestimonialProps {
  title: string;
  reviews: {
    stars: number;
    reviews: {
      [key: string]: string;
    };
    image: string;
    name: string;
    caption: {
      [key: string]: string;
    };
  }[];
}
