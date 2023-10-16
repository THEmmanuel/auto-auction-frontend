import React, { useState } from 'react';
import axios from 'axios';
import style from './FileUpload.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import porsche from '../../assets/testPorsche.svg';

const FileUpload = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState('');

	// Create a FormData object to send the file
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		setSelectedImage(URL.createObjectURL(file));

		const formData = new FormData();
		formData.append('image', file);


	}


	return (
		<div>
			<span
				className={style.CarTextField}>
				Add Image
			</span>

			<div
				className={style.CarImageWrapper}
			>
				<input type="file" onChange={handleImageUpload} className={style.ImageUpload} />
				{uploadStatus === 'uploading' && <p>Uploading...</p>}
				{uploadStatus === 'uploaded' && <p>Uploaded</p>}
				{selectedImage && <img src={selectedImage} alt="Uploaded" className={style.CarImage} />}
			</div>
		</div>
	)
}

export default FileUpload;