import React from 'react';
import { ISemanticContentsProps as IProps} from './semantic-contents-list';


const SemanticContentsItem: React.FC<IProps> = () => {


  return (
    <>

      <div className="col">
        <table className="card radius-2">
          <tbody className="card-b">
          <tr>
            <td className="va-top"><img src="img/icon/fb.png" className="i-img"/></td>
            <td className="c-title">What is main issue?</td>
          </tr>
          </tbody>
        </table>
      </div>

    </>
  );

}

export default SemanticContentsItem;

