import React, { useState } from 'react';
import axios from 'axios';
import style from './FileUpload.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { Web3Storage } from 'web3.storage'

import porsche from '../../assets/testPorsche.svg';

const FileUpload = (props) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadStatus, setUploadStatus] = useState('');
	const token = process.env.REACT_APP_WEB3_STORAGE_TOKEN;
	const [files, setFiles] = useState([]);
	const [fileName, setFileName] = useState('')

	const API_URL = process.env.REACT_APP_BACKEND_API

	// Create a FormData object to send the file
	const handleImageUpload = async (event) => {
		// event.preventDefault()
		const client = new Web3Storage({ token });

		try {
			const cid = await client.put(files, {
				onRootCidReady: localCid => {
					setUploadStatus('uploading');
				},
				onStoredChunk: bytes => {
					setUploadStatus('uploaded');
				}
			});

			const uploadedImageURL = `https://${cid}.ipfs.w3s.link/${fileName}`;
			setSelectedImage(uploadedImageURL);
			props.onImageUpload(uploadedImageURL);
		} catch (error) {
			console.error("Error uploading image:", error);
		}
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
				<input
					type="file"
					onChange={e => {
						const file = e.target.files[0]
						setFileName(file.name)
						setFiles(e.target.files)
						setSelectedImage(URL.createObjectURL(file))
					}}
					className={style.ImageUpload} />

				{uploadStatus === 'uploading' &&
					<p className={style.UploadText}>
						uploading
					</p>}

				{uploadStatus === 'uploaded' &&
					<p className={style.UploadText}>
						uploaded
					</p>}
				{selectedImage && <img src={selectedImage} alt="Uploaded" className={style.CarImage} />}
				<PrimaryButton
					text="Submit"
					width={200}
					click={() => handleImageUpload()}
				/>
			</div>
		</div>
	)
}

export default FileUpload;