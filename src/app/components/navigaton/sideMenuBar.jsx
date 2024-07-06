'use client'

import EvaluationIcon from "../icons/evaluationIcon";
import GradesIcon from "../icons/gradesIcon";
import NoteIcon from "../icons/noteIcon";
import UserIcon from "../icons/userIcon";

import Link from "next/link";

import { usePathname } from 'next/navigation'

const SideMenuBar = () =>{
  const pathname = usePathname()  
  const sizeTailwindIcons = 'w-5 h5'
  const routes = [
    {
      title: 'Estudiantes',
      href : '/students',
      icon: <UserIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Asistencia',
      href : '/assistance',
      icon: <NoteIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Evaluaciones',
      href : '/exams',
      icon: <EvaluationIcon className={sizeTailwindIcons}/>
    },
    {
      title: 'Calificaciones',
      href : '/grades',
      icon: <GradesIcon className={sizeTailwindIcons}/>
    }
  ]

  return(
    <div className="h-full bg-base-200 rounded-box flex flex-col">
      <div className="flex-none p-10 text-center">
        <h1 className="font-bold text-lg" >COMPUTACION 1</h1>
      </div>
      <div className="grow  content-center">
        <ul className="menu">
          {
            routes.map((el, index)=>(
              <li key={index}>
                <Link className={pathname===el.href? `active`:`` } href={el.href}>
                  {el.icon} {el.title}
                </Link>
              </li>
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