import Male from '../../images/male.svg';
import Female from '../../images/female.svg';
import Middle from '../../images/middle.svg';

export const chooseImageByGender = (gender: string) => {
    switch (gender) {
        case 'Female':
            return Female
        case 'Male':
            return Male
        default:
            return Middle
    }
}