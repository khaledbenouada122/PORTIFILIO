import { PageInfo } from './../typings.d';
import {server} from '../config/index'

export const fetchPageInfo = async () => {
    const res = await fetch(`${server}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
}