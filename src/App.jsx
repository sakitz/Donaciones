import gin from "./assets/gin.jpg";

function App() {
  return (
    <section className="max-w-screen-lg h-screen justify-center items-center mx-auto">

      <article className="shadow-xl py-4 my-2">
      <img src={gin} alt="" className="w-[100px] h-[100px] rounded-full justify-center items-center text-center mx-auto my-10" />

      <h1 className="text-4xl text-center my-6 font-bold">
      <ion-icon name="logo-youtube"></ion-icon> <strong className="py-2 hover:text-5xl transition-all cursor-pointer">Sakitzz</strong> 

        </h1>
      </article>


      <section className="text-center text-2xl font-bold items-center justify-center my-24 h-10 w-[90%] mx-auto  rounded-3xl hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:w-[95%] transition-all">
        <a
          href="https://link.mercadopago.com.ar/sakiii"
          target="_blank"
        >
          <ion-icon name="card-outline"></ion-icon> Tranferencia Bancaria
        </a>
      </section>

      <section className="text-center text-2xl font-bold items-center justify-center my-24 h-10 w-[90%] mx-auto  rounded-3xl hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:w-[95%] transition-all">
        <ion-icon name="logo-paypal"></ion-icon>
        <a href="https://www.paypal.com/paypalme/SakitZz" target="_blank">
          <strong className="text-blue-600">Pay</strong>
          <strong className="text-sky-500">pal</strong>
        </a>
      </section>


      <section className="text-center text-2xl font-bold items-center justify-center my-24 h-10 w-[90%] mx-auto  rounded-3xl hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:w-[95%] transition-all">
        <a
          href="https://cafecito.app/sakitz"
          target="_blank"
        >
           <ion-icon name="cafe-outline"></ion-icon> Cafesito
        </a>
      </section>

      <h1 className="text-center items-end shadow-2xl py-10">
        Gracias por apoyar este contenido y ayudarme a seguir creciendo !!!
      </h1> 

  
    </section>
  );
}

export default App;
