import React, { useState } from 'react';
import axios from 'axios';
import style from './FileUpload.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

import porsche from '../../assets/testPorsche.svg';

const FileUpload = (props) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState('');

	const API_URL = 'http://localhost:8080'


	// Create a FormData object to send the file
	const handleImageUpload = (event) => {

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
				<PrimaryButton
					text="Submit"
					width={200}
				/>
			</div>
		</div>
	)
}

export default FileUpload;