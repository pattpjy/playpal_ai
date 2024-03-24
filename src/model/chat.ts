export interface activitiesData {
  title: string;
  Content: string;
  Categories: string;
  url: string;
  thumbnail: string;
}

export interface chatAPIResponse {
  text: string;
  activities_list: activitiesData[];
}
