import React from 'react'
import {Link} from 'react-router-dom';

const ProjectCS = (props) => {
    return (
        <div className='pb-20 md:pb-24 lg:pb-28 xl:pb-32 2xl:pb-36'>
            <div className = 'lg:flex justify-evenly inline-block bg-slate-300 dark:bg-slate-800 rounded-lg py-8 md:py-10 mx-auto'>
                <img src= {props.picture} className = 'mx-auto border-sky-500 dark:border-emerald-800 border-2 lg:border-4 mb-4 lg:mb-0 \
                    w-48 h-48 md:w-52 md:h-52 lg:w-72 lg:h-72 xl:h-80 xl:w-80' alt={props.alt}/>
                    
                <div className = 'flex justify-center items-center mx-auto lg:w-7/12 font-PangramBold'>
                    <div className='pb-4'>
                        <h1 className = 'text-4xl md:text-5xl xl:text-6xl pb-1 md:pb-3 lg:pb-2'>{props.title}</h1>
                        <p className = 'text-left mb-4 mx-auto lg:mb-6 w-10/12 lg:w-full font-PangramLight text-sm md:text-base'>
                            {props.description}
                        </p>
                        
                        <div className='lg:flex-row flex flex-col'>
                            {props.outsideLink ? <a href={props.extraLink} className = 'mx-auto py-4 lg:pb-5 w-64 mb-4 lg:mb-0 rounded-lg \
                                bg-sky-700 hover:bg-sky-500 dark:bg-emerald-800 lg:dark:hover:bg-emerald-600' 
                                target='_blank' rel='noopener noreferrer'>{props.buttonText} </a> :
                                
                                <Link to={props.extraLink}>
                                    <div className = 'mx-auto py-4 lg:pb-5 w-64 mb-4 lg:mb-0 rounded-lg \
                                    bg-sky-700 hover:bg-sky-500 dark:bg-emerald-800 lg:dark:hover:bg-emerald-600' >{props.buttonText} </div>
                                </Link>
                            }
                            
                            <a href={props.githubLink} className = 'mx-auto py-4 lg:pb-5 w-64 rounded-lg \
                            bg-sky-700 hover:bg-sky-500 dark:bg-emerald-800 lg:dark:hover:bg-emerald-600'
                            target='_blank' rel='noopener noreferrer'>View the Code on GitHub</a>  
                        </div>   
                    </div>               
                </div>                
            </div>
        </div>
    )
}

export default ProjectCS
