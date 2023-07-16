import { Project } from "../typings";
import {server} from '../config/index'

export const fetchProjects = async () => {
    const res = await fetch(`${server}/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
}