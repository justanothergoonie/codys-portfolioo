import React, { useEffect, useContext, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import back from '../img/back-btn.png';
import { Context } from '../store/store';

const ProjectPreview =({
    video,
	workPreview0,
	workPreview1,
	workPreview2,
	workPreview3,
	workPreview4,
	workPreview5,
    workPreview6,
    workPreview7,
    workPreview8,
    workPreview9,
    trapWorkDescription0,
    trapWorkDescription1,
    pokeWorkDescription0,
    pokeWorkDescription1,
    pokeWorkDescription2,
	sucWorkDescription0,
    sucWorkDescription1,
    sucWorkDescription2,
    uniWorkDescription0,
    uniWorkDescription1,
    energyWorkDescription0,
    tatWorkDescription0,
    tatWorkDescription1,
    mindWorkDescription0,
    mindWorkDescription1,
    mindWorkDescription2,
    mindWorkDescription3,
    mafiaWorkDescription0,
    nodeWorkDescription0,
    nodeWorkDescription1,
    nodeWorkDescription2,
    pingWorkDescription0,
    pingWorkDescription1,
    pingWorkDescription2,
    vidNote,

}) => {
    const history = useHistory();
	const location = useLocation();
	const ref = useRef();
	const [state, dispatch] = useContext(Context);
    // const img = ref.current;
    return(
        <div className="pnd">
            <h2 className="pnd__title">Previews &amp; Designs</h2>
            <h3>{vidNote}</h3>
            <div
                dangerouslySetInnerHTML={{ __html: video }}
                className="vid"
            />

            <div className="project-page__project__pics" ref={ref}>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview0} alt="" />
                    </div>
                    <p>
                        {trapWorkDescription0}
                        {pokeWorkDescription0}
                        {uniWorkDescription0}
                        {sucWorkDescription0}
                        {energyWorkDescription0}
                        {tatWorkDescription0}
                        {mindWorkDescription0}
                        {mafiaWorkDescription0}
                        {nodeWorkDescription0}
                    </p>
                    
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview1} alt="" />
                    </div>
                    <p>
                        {trapWorkDescription1}
                        {pokeWorkDescription1}
                        {mindWorkDescription1}
                        {nodeWorkDescription1}
                    </p>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview2} alt="" />
                    </div>
                    <p>
                        {pokeWorkDescription2}
                        {uniWorkDescription1}
                        {sucWorkDescription1}
                        {tatWorkDescription1}
                        {mindWorkDescription2}
                        {nodeWorkDescription2}
                        {pingWorkDescription0}

                    </p>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview3} alt="" />
                    </div>
                    <p>
                        {sucWorkDescription2}
                        {mindWorkDescription3}
                        
                    </p>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview4} alt="" />
                    </div>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview5} alt="" />
                    </div>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview6} alt="" />
                    </div>
                    <p>
                    {pingWorkDescription1}
                    </p>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview7} alt="" />
                    </div>
                    <p>
                        {pingWorkDescription2}
                    </p>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview8} alt="" />
                    </div>
                </div>
                <div className="project-page__preview-holder">
                    <div className="project-page__project__pics-pic">
                        <img src={workPreview9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default ProjectPreview;