import React from "react";
import * as styles from "../styles/home.module.scss";

export function FormErrors({ formErrors }) {
  return (
    <div>
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName] > 0) {
          return (
            <p key={i} className={styles.formError}>
              {fieldName} {formErrors[fieldName]}
            </p>
          );
        }
        return "";
      })}
    </div>
  );
}
