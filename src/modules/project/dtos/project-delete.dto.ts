import type { ProjectDeleteRequest } from "../interfaces";
import { IsUUID, IsNotEmpty } from "class-validator";

export class ProjectDeleteRequestDto implements ProjectDeleteRequest {
    @IsUUID('4')
    @IsNotEmpty()
    id: string;
}
