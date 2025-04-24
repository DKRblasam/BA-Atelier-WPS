import { useState, useEffect } from "react";
import { loader } from '../loader.tsx';
import "../../Styles/servicios.css";

interface Servicio {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen?: string;
}

export default function Servicios() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch("http://localhost:3306/BA/servicios");
        const data = await response.json();
        setServicios(data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicios();
  }, []);

  if (true) {
    return (
      <div className="loading-container">
        <h1>Cargando servicios...</h1>
        <img
          src="https://media.giphy.com/media/3o7aD2sa4v8x5g0Y4I/giphy.gif"
          alt="Cargando..."
        />
      </div>
    );
  }

  return (
    <>
      <div className="servicios">
        <div className="filter">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-item">
              <h1>{servicio.nombre}</h1>
              <img
                src="http://unavatar.io/substack/bankless"
                alt={servicio.nombre}
              />
              <h3>{servicio.categoria}</h3>
              <p>
                Descripción:{" "}
                {servicio.descripcion ? servicio.descripcion : "No disponible"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
