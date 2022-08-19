import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addProcessor, db } from "../../firebase";

const Processors = () => {
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    addProcessor(e.name, e.brand, e.cores, e.threads);
  };

  const fetchData = async () => {
    await getDocs(collection(db, "processors")).then((response) => {
      response.docs.forEach((processor) => {
        setData((oldData) => [
          ...oldData,
          processor._document.data.value.mapValue.fields,
        ]);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />

        <input {...register("brand", { required: true })} />

        <input {...register("cores", { required: true })} />

        <input {...register("threads", { required: true })} />

        <input type="submit" />
      </form>
      {data.map((processor) => {
        return (
          <div key={processor.name.stringValue}>
            <p>{processor.name.stringValue}</p>
            <p>{processor.brand.stringValue}</p>
            <p>{processor.cores.stringValue}</p>
            <p>{processor.threads.stringValue}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Processors;
