import EvaluationIcon from "../icons/evaluationIcon";
import GradesIcon from "../icons/gradesIcon";
import NoteIcon from "../icons/noteIcon";
import UserIcon from "../icons/userIcon";

const SideMenuBar = () =>{
  const sizeTailwindIcons = 'w-5 h5'
  const routes = [
    {
      title: 'Estudiantes',
      icon: <UserIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Asistencia',
      icon: <NoteIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Evaluaciones',
      icon: <EvaluationIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Calificaciones',
      icon: <GradesIcon className={sizeTailwindIcons}/>
    }
  ]

  return(
    <div className="h-full bg-base-200 rounded-box w-1/6 flex flex-col">
      <div className="flex-none p-10 text-center">
        <h1 className="font-bold text-lg" >COMPUTACION 1</h1>
      </div>
      <div className="grow  content-center">
        <ul className="menu">
          {
            routes.map((el)=>(
              <li><a className={`${12}`}>{el.icon} {el.title}</a></li>
            ))
          }
        </ul>
        
      </div>
      <div className="flex-none p-6 text-center">
        <button className="btn bg-red-400"> Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default SideMenuBar;