import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { RiUploadLine } from 'react-icons/ri';
import { Box, Image, Text } from '@chakra-ui/react';

import ThumbUpFill from '../../../assets/Form/thumb-up-fill.svg';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

  const [selectedFileUrl, setSelectedFileUrl] = React.useState('');

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['text/csv', 'application/pdf'],
    maxFiles: 1
  });

  return (
    <Box
      {...getRootProps()}
      height={42}
      minWidth={133}
      background='#E1FAEC'
      borderRadius={8}
      border="1px dashed #4ECB79"
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      outline={0}
    >
      <input {...getInputProps()} accept={'text/csv'} />
      {selectedFileUrl
        ? <Image src={ThumbUpFill} alt="File thumbnail" />
        : (
          <Text
            width={'calc(100% - 8px)'}
            height={'calc(100% - 8px)'}
            borderRadius={10}
            display={'flex'}
            flexDirection="column"
            justifyContent={'center'}
            alignItems={'center'}
          >
            <RiUploadLine />
          </Text>
        )}
    </Box>
  );
};

export default Dropzone;
