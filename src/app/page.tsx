import RenderCards from "@/components/cardProduct/renderCards";


export default function Home() {
  return (
    <div className = "max-w-6xl mx-auto text-center flex flex-col">
        <div>
            aca van imagenes tipo carrucel  
        </div>    
        <div>
          aca van articulos destacados.
        </div>
        <div>
          <RenderCards/>
        </div>
        <h1>Este es mi HOME</h1>
    </div>
  );
}
