import React from "react";
import axios from "axios";

const DeleteProfile = () => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      // Make a DELETE request to delete the user profile
      await axios.delete("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Set deleteSuccess state to true upon successful deletion
      setDeleteSuccess(true);
    } catch (error) {
      console.error("Error deleting profile:", error.message);
      setError("Error deleting profile");
    }
  };

  return (
    <div>
      <h2>Delete Profile</h2>
      {deleteSuccess ? (
        <p>Profile deleted successfully!</p>
      ) : (
        <>
          <p>Are you sure you want to delete your profile?</p>
          <button onClick={handleDelete}>Delete</button>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default DeleteProfile;
