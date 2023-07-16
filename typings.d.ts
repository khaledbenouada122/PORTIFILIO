interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}
interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: "reference";
    }
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    adress: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber : string;
    profilePic: Image;
}
export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;

}
export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image : Image;
    linkToBuild : string;
    summary : string;
    technologies : Technology[];
}
export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}