import { useState, useRef, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/createPatient.module.css";

export default function CriarPacientes() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click();
  };

  const handleClose = () => {
    navigate("/pacientes");
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.add_patient_modal}>
        
        <button className={styles.close_btn} onClick={handleClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className={styles.modal_title}>Dados do paciente</h2>

        <div className={styles.modal_content}>
          
          <form className={styles.patient_form}>
            <div className={styles.form_group}>
              <label>Nome do paciente</label>
              <input type="text" name="nome" />
            </div>

            <div className={styles.form_group}>
              <label>Descrição</label>
              <input type="text" name="descricao" />
            </div>

            <div className={styles.form_group}>
              <label>Data de nascimento</label>
              <input type="date" name="nascimento" />
            </div>

            <div className={styles.form_group}>
              <label>Contato do responsável</label>
              <input type="text" name="responsavel" />
            </div>

            <div className={styles.form_group}>
              <label>Telefone do responsável</label>
              <input type="text" name="telefone" />
            </div>
          </form>

          <div className={styles.photo_upload_section}>
            <span className={styles.photo_label}>Foto do paciente</span>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            <div
              className={styles.photo_placeholder}
              onClick={handlePlaceholderClick}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className={styles.preview_img}
                />
              ) : (
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className={styles.modal_footer}>
          <button className={styles.submit_btn}>
            Adicionar paciente
          </button>
        </div>

      </div>
    </div>
  );
}