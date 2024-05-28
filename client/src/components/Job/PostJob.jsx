import React from 'react'
import "./postJob.css"

const PostJob = () => {
  return (
    <div class="container">
    <div class="apply_box">
     <h1>Create Job Form</h1>
     <form action="form.php">
         <div class="form_container">

             <div class="from_control">
                 <label for="added_By">Added By</label>
                 <input type="text" name="added_By" id="added_By" placeholder="Enter information"/>

             </div>

             <div class="from_control">
                 <label for="job_title">Job Title</label>
                 <input type="text" name="job_title" id="job_title" placeholder="Enter job title"/>

             </div>

             <div class="from_control">
                 <label for="job_location">Job location</label>
                 <input type="text" name="job_location" id="job_location" placeholder="Enter job location"/>

             </div>

             <div class="from_control">
                 <label for="Salary_from">Salary From</label>
                 <input type="text" name="Salary_from" id="Salary_from" placeholder="Enter information"/>
             </div>

             <div class="from_control">
                 <label for="job_Description">Job Description</label>
                 <textarea id="job_Description" rows="5" cols="50" placeholder="Enter job description"></textarea>

             </div>

             <div class="from_control">
                 <label for="salary_To">Salary To</label>
                 <input type="text" name="salary_To" id="salary_To" placeholder="Enter information"/>

             </div>
                 
             <div class="from_control">
                 <label for="date">Job Expired</label>
                 <input type="date" name="date" id="date"/>

             </div>
     
             

         </div>
         <div class="button_container">
             <button type="submit">
                 Submit Now

             </button>
         </div>
     </form>
    </div> 
 </div>
  )
}

export default PostJob