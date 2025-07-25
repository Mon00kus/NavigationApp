import Ionicons from '@react-native-vector-icons/ionicons';

interface Props  {
   name?: "rocket-outline" | "home" | "push" | "map" | "filter" | "at" | "key" | "body" | "code" | "link" | "menu" | "search" | "time" | "ellipse" | "woman-sharp" | undefined; 
   size?: number;
   color?: string;
}

export const Ionicon = ({ name ='home', size=30, color='green'}: Props) => {  
  return (
    <Ionicons 
        name= {name}
        size= {size} 
        color= {color} 
    />
  );
};