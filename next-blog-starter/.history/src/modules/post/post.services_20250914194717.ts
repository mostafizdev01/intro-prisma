

const CreatePost = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

//get All Post
const GetAllPost = async (payload:any) => {
   console.log("Create post is clicked..");
   return payload   
}

// get post by id
const GetSinglePost = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

// upate post by id
const UpdatePostById = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

//DeletePostById
const DeletePostById = async (payload:any) => {
   console.log("Create post is clicked..", payload);
   
}

export const PostServices = {
    CreatePost,
     GetAllPost,
     GetSinglePost,
     UpdatePostById,
     DeletePostById
}