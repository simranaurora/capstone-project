import React, { useState } from 'react';

const Profile = ({ setProfilePhoto }) => {
    const url = process.env.FRONTEND_URL || 'http://localhost:3000';
    const [formData, setFormData] = useState({
        username: '',
        profilePhoto: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                profilePhoto: file,
            });
            setProfilePhoto(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/api/user/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: formData.username }),
                credentials: 'include',
            });
            const data = await response.json();
            if (data.success) {
                alert('Username updated successfully');
            } else {
                alert('Failed to update username');
            }
        } catch (error) {
            console.error('Error updating username:', error);
            alert('Error updating username');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Profile</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="profilePhoto">Profile Photo:</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={handlePhotoChange}
                        style={styles.input}
                    />
                    {formData.profilePhoto && (
                        <img
                            src={URL.createObjectURL(formData.profilePhoto)}
                            alt="Profile"
                            style={styles.profileImage}
                        />
                    )}
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#4a90e2',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        marginTop: '10px',
    },
    profileImage: {
        marginTop: '10px',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
    },
};

export default Profile;
