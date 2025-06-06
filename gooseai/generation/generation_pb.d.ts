// package: gooseai
// file: generation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as tensors_pb from "./tensors_pb";

export class Token extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    text: string,
    id: number,
  }
}

export class Tokens extends jspb.Message {
  clearTokensList(): void;
  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): void;
  addTokens(value?: Token, index?: number): Token;

  hasTokenizerId(): boolean;
  clearTokenizerId(): void;
  getTokenizerId(): string;
  setTokenizerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    tokensList: Array<Token.AsObject>,
    tokenizerId: string,
  }
}

export class Artifact extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getType(): ArtifactTypeMap[keyof ArtifactTypeMap];
  setType(value: ArtifactTypeMap[keyof ArtifactTypeMap]): void;

  getMime(): string;
  setMime(value: string): void;

  hasMagic(): boolean;
  clearMagic(): void;
  getMagic(): string;
  setMagic(value: string): void;

  hasBinary(): boolean;
  clearBinary(): void;
  getBinary(): Uint8Array | string;
  getBinary_asU8(): Uint8Array;
  getBinary_asB64(): string;
  setBinary(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTokens(): boolean;
  clearTokens(): void;
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;

  hasClassifier(): boolean;
  clearClassifier(): void;
  getClassifier(): ClassifierParameters | undefined;
  setClassifier(value?: ClassifierParameters): void;

  hasTensor(): boolean;
  clearTensor(): void;
  getTensor(): tensors_pb.Tensor | undefined;
  setTensor(value?: tensors_pb.Tensor): void;

  getIndex(): number;
  setIndex(value: number): void;

  getFinishReason(): FinishReasonMap[keyof FinishReasonMap];
  setFinishReason(value: FinishReasonMap[keyof FinishReasonMap]): void;

  getSeed(): number;
  setSeed(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDataCase(): Artifact.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Artifact.AsObject;
  static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Artifact;
  static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
  export type AsObject = {
    id: number,
    type: ArtifactTypeMap[keyof ArtifactTypeMap],
    mime: string,
    magic: string,
    binary: Uint8Array | string,
    text: string,
    tokens?: Tokens.AsObject,
    classifier?: ClassifierParameters.AsObject,
    tensor?: tensors_pb.Tensor.AsObject,
    index: number,
    finishReason: FinishReasonMap[keyof FinishReasonMap],
    seed: number,
    uuid: string,
    size: number,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    BINARY = 5,
    TEXT = 6,
    TOKENS = 7,
    CLASSIFIER = 11,
    TENSOR = 14,
  }
}

export class PromptParameters extends jspb.Message {
  hasInit(): boolean;
  clearInit(): void;
  getInit(): boolean;
  setInit(value: boolean): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromptParameters.AsObject;
  static toObject(includeInstance: boolean, msg: PromptParameters): PromptParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromptParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromptParameters;
  static deserializeBinaryFromReader(message: PromptParameters, reader: jspb.BinaryReader): PromptParameters;
}

export namespace PromptParameters {
  export type AsObject = {
    init: boolean,
    weight: number,
  }
}

export class Prompt extends jspb.Message {
  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): PromptParameters | undefined;
  setParameters(value?: PromptParameters): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTokens(): boolean;
  clearTokens(): void;
  getTokens(): Tokens | undefined;
  setTokens(value?: Tokens): void;

  hasArtifact(): boolean;
  clearArtifact(): void;
  getArtifact(): Artifact | undefined;
  setArtifact(value?: Artifact): void;

  getPromptCase(): Prompt.PromptCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prompt.AsObject;
  static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prompt;
  static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
}

export namespace Prompt {
  export type AsObject = {
    parameters?: PromptParameters.AsObject,
    text: string,
    tokens?: Tokens.AsObject,
    artifact?: Artifact.AsObject,
  }

  export enum PromptCase {
    PROMPT_NOT_SET = 0,
    TEXT = 2,
    TOKENS = 3,
    ARTIFACT = 4,
  }
}

export class SamplerParameters extends jspb.Message {
  hasEta(): boolean;
  clearEta(): void;
  getEta(): number;
  setEta(value: number): void;

  hasSamplingSteps(): boolean;
  clearSamplingSteps(): void;
  getSamplingSteps(): number;
  setSamplingSteps(value: number): void;

  hasLatentChannels(): boolean;
  clearLatentChannels(): void;
  getLatentChannels(): number;
  setLatentChannels(value: number): void;

  hasDownsamplingFactor(): boolean;
  clearDownsamplingFactor(): void;
  getDownsamplingFactor(): number;
  setDownsamplingFactor(value: number): void;

  hasCfgScale(): boolean;
  clearCfgScale(): void;
  getCfgScale(): number;
  setCfgScale(value: number): void;

  hasInitNoiseScale(): boolean;
  clearInitNoiseScale(): void;
  getInitNoiseScale(): number;
  setInitNoiseScale(value: number): void;

  hasStepNoiseScale(): boolean;
  clearStepNoiseScale(): void;
  getStepNoiseScale(): number;
  setStepNoiseScale(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SamplerParameters.AsObject;
  static toObject(includeInstance: boolean, msg: SamplerParameters): SamplerParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SamplerParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SamplerParameters;
  static deserializeBinaryFromReader(message: SamplerParameters, reader: jspb.BinaryReader): SamplerParameters;
}

export namespace SamplerParameters {
  export type AsObject = {
    eta: number,
    samplingSteps: number,
    latentChannels: number,
    downsamplingFactor: number,
    cfgScale: number,
    initNoiseScale: number,
    stepNoiseScale: number,
  }
}

export class ConditionerParameters extends jspb.Message {
  hasVectorAdjustPrior(): boolean;
  clearVectorAdjustPrior(): void;
  getVectorAdjustPrior(): string;
  setVectorAdjustPrior(value: string): void;

  hasConditioner(): boolean;
  clearConditioner(): void;
  getConditioner(): Model | undefined;
  setConditioner(value?: Model): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionerParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionerParameters): ConditionerParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionerParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionerParameters;
  static deserializeBinaryFromReader(message: ConditionerParameters, reader: jspb.BinaryReader): ConditionerParameters;
}

export namespace ConditionerParameters {
  export type AsObject = {
    vectorAdjustPrior: string,
    conditioner?: Model.AsObject,
  }
}

export class ScheduleParameters extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): number;
  setStart(value: number): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): number;
  setEnd(value: number): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleParameters): ScheduleParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleParameters;
  static deserializeBinaryFromReader(message: ScheduleParameters, reader: jspb.BinaryReader): ScheduleParameters;
}

export namespace ScheduleParameters {
  export type AsObject = {
    start: number,
    end: number,
    value: number,
  }
}

export class StepParameter extends jspb.Message {
  getScaledStep(): number;
  setScaledStep(value: number): void;

  hasSampler(): boolean;
  clearSampler(): void;
  getSampler(): SamplerParameters | undefined;
  setSampler(value?: SamplerParameters): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): ScheduleParameters | undefined;
  setSchedule(value?: ScheduleParameters): void;

  hasGuidance(): boolean;
  clearGuidance(): void;
  getGuidance(): GuidanceParameters | undefined;
  setGuidance(value?: GuidanceParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StepParameter.AsObject;
  static toObject(includeInstance: boolean, msg: StepParameter): StepParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StepParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StepParameter;
  static deserializeBinaryFromReader(message: StepParameter, reader: jspb.BinaryReader): StepParameter;
}

export namespace StepParameter {
  export type AsObject = {
    scaledStep: number,
    sampler?: SamplerParameters.AsObject,
    schedule?: ScheduleParameters.AsObject,
    guidance?: GuidanceParameters.AsObject,
  }
}

export class Model extends jspb.Message {
  getArchitecture(): ModelArchitectureMap[keyof ModelArchitectureMap];
  setArchitecture(value: ModelArchitectureMap[keyof ModelArchitectureMap]): void;

  getPublisher(): string;
  setPublisher(value: string): void;

  getDataset(): string;
  setDataset(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSemanticVersion(): string;
  setSemanticVersion(value: string): void;

  getAlias(): string;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    architecture: ModelArchitectureMap[keyof ModelArchitectureMap],
    publisher: string,
    dataset: string,
    version: number,
    semanticVersion: string,
    alias: string,
  }
}

export class CutoutParameters extends jspb.Message {
  clearCutoutsList(): void;
  getCutoutsList(): Array<CutoutParameters>;
  setCutoutsList(value: Array<CutoutParameters>): void;
  addCutouts(value?: CutoutParameters, index?: number): CutoutParameters;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number;
  setCount(value: number): void;

  hasGray(): boolean;
  clearGray(): void;
  getGray(): number;
  setGray(value: number): void;

  hasBlur(): boolean;
  clearBlur(): void;
  getBlur(): number;
  setBlur(value: number): void;

  hasSizePower(): boolean;
  clearSizePower(): void;
  getSizePower(): number;
  setSizePower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CutoutParameters.AsObject;
  static toObject(includeInstance: boolean, msg: CutoutParameters): CutoutParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CutoutParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CutoutParameters;
  static deserializeBinaryFromReader(message: CutoutParameters, reader: jspb.BinaryReader): CutoutParameters;
}

export namespace CutoutParameters {
  export type AsObject = {
    cutoutsList: Array<CutoutParameters.AsObject>,
    count: number,
    gray: number,
    blur: number,
    sizePower: number,
  }
}

export class GuidanceScheduleParameters extends jspb.Message {
  getDuration(): number;
  setDuration(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceScheduleParameters.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceScheduleParameters): GuidanceScheduleParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceScheduleParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceScheduleParameters;
  static deserializeBinaryFromReader(message: GuidanceScheduleParameters, reader: jspb.BinaryReader): GuidanceScheduleParameters;
}

export namespace GuidanceScheduleParameters {
  export type AsObject = {
    duration: number,
    value: number,
  }
}

export class GuidanceInstanceParameters extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  addModels(value?: Model, index?: number): Model;

  hasGuidanceStrength(): boolean;
  clearGuidanceStrength(): void;
  getGuidanceStrength(): number;
  setGuidanceStrength(value: number): void;

  clearScheduleList(): void;
  getScheduleList(): Array<GuidanceScheduleParameters>;
  setScheduleList(value: Array<GuidanceScheduleParameters>): void;
  addSchedule(value?: GuidanceScheduleParameters, index?: number): GuidanceScheduleParameters;

  hasCutouts(): boolean;
  clearCutouts(): void;
  getCutouts(): CutoutParameters | undefined;
  setCutouts(value?: CutoutParameters): void;

  hasPrompt(): boolean;
  clearPrompt(): void;
  getPrompt(): Prompt | undefined;
  setPrompt(value?: Prompt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceInstanceParameters.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceInstanceParameters): GuidanceInstanceParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceInstanceParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceInstanceParameters;
  static deserializeBinaryFromReader(message: GuidanceInstanceParameters, reader: jspb.BinaryReader): GuidanceInstanceParameters;
}

export namespace GuidanceInstanceParameters {
  export type AsObject = {
    modelsList: Array<Model.AsObject>,
    guidanceStrength: number,
    scheduleList: Array<GuidanceScheduleParameters.AsObject>,
    cutouts?: CutoutParameters.AsObject,
    prompt?: Prompt.AsObject,
  }
}

export class GuidanceParameters extends jspb.Message {
  getGuidancePreset(): GuidancePresetMap[keyof GuidancePresetMap];
  setGuidancePreset(value: GuidancePresetMap[keyof GuidancePresetMap]): void;

  clearInstancesList(): void;
  getInstancesList(): Array<GuidanceInstanceParameters>;
  setInstancesList(value: Array<GuidanceInstanceParameters>): void;
  addInstances(value?: GuidanceInstanceParameters, index?: number): GuidanceInstanceParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceParameters.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceParameters): GuidanceParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceParameters;
  static deserializeBinaryFromReader(message: GuidanceParameters, reader: jspb.BinaryReader): GuidanceParameters;
}

export namespace GuidanceParameters {
  export type AsObject = {
    guidancePreset: GuidancePresetMap[keyof GuidancePresetMap],
    instancesList: Array<GuidanceInstanceParameters.AsObject>,
  }
}

export class TransformType extends jspb.Message {
  hasDiffusion(): boolean;
  clearDiffusion(): void;
  getDiffusion(): DiffusionSamplerMap[keyof DiffusionSamplerMap];
  setDiffusion(value: DiffusionSamplerMap[keyof DiffusionSamplerMap]): void;

  hasUpscaler(): boolean;
  clearUpscaler(): void;
  getUpscaler(): UpscalerMap[keyof UpscalerMap];
  setUpscaler(value: UpscalerMap[keyof UpscalerMap]): void;

  getTypeCase(): TransformType.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformType.AsObject;
  static toObject(includeInstance: boolean, msg: TransformType): TransformType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformType;
  static deserializeBinaryFromReader(message: TransformType, reader: jspb.BinaryReader): TransformType;
}

export namespace TransformType {
  export type AsObject = {
    diffusion: DiffusionSamplerMap[keyof DiffusionSamplerMap],
    upscaler: UpscalerMap[keyof UpscalerMap],
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    DIFFUSION = 1,
    UPSCALER = 2,
  }
}

export class T2IAdapterParameter extends jspb.Message {
  getAdapterType(): T2IAdapterMap[keyof T2IAdapterMap];
  setAdapterType(value: T2IAdapterMap[keyof T2IAdapterMap]): void;

  getAdapterStrength(): number;
  setAdapterStrength(value: number): void;

  getAdapterInitType(): T2IAdapterInitMap[keyof T2IAdapterInitMap];
  setAdapterInitType(value: T2IAdapterInitMap[keyof T2IAdapterInitMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2IAdapterParameter.AsObject;
  static toObject(includeInstance: boolean, msg: T2IAdapterParameter): T2IAdapterParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: T2IAdapterParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2IAdapterParameter;
  static deserializeBinaryFromReader(message: T2IAdapterParameter, reader: jspb.BinaryReader): T2IAdapterParameter;
}

export namespace T2IAdapterParameter {
  export type AsObject = {
    adapterType: T2IAdapterMap[keyof T2IAdapterMap],
    adapterStrength: number,
    adapterInitType: T2IAdapterInitMap[keyof T2IAdapterInitMap],
  }
}

export class ContentCredentialsParameters extends jspb.Message {
  hasModelMetadata(): boolean;
  clearModelMetadata(): void;
  getModelMetadata(): ContentCredentialsParameters.ModelMetadataMap[keyof ContentCredentialsParameters.ModelMetadataMap];
  setModelMetadata(value: ContentCredentialsParameters.ModelMetadataMap[keyof ContentCredentialsParameters.ModelMetadataMap]): void;

  getParametersCase(): ContentCredentialsParameters.ParametersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentCredentialsParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ContentCredentialsParameters): ContentCredentialsParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentCredentialsParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentCredentialsParameters;
  static deserializeBinaryFromReader(message: ContentCredentialsParameters, reader: jspb.BinaryReader): ContentCredentialsParameters;
}

export namespace ContentCredentialsParameters {
  export type AsObject = {
    modelMetadata: ContentCredentialsParameters.ModelMetadataMap[keyof ContentCredentialsParameters.ModelMetadataMap],
  }

  export interface ModelMetadataMap {
    MODEL_METADATA_UNSPECIFIED: 0;
    MODEL_METADATA_SIGN_WITH_ENGINE_ID: 1;
  }

  export const ModelMetadata: ModelMetadataMap;

  export enum ParametersCase {
    PARAMETERS_NOT_SET = 0,
    MODEL_METADATA = 1,
  }
}

export class FineTuningParameters extends jspb.Message {
  getModelId(): string;
  setModelId(value: string): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FineTuningParameters.AsObject;
  static toObject(includeInstance: boolean, msg: FineTuningParameters): FineTuningParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FineTuningParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FineTuningParameters;
  static deserializeBinaryFromReader(message: FineTuningParameters, reader: jspb.BinaryReader): FineTuningParameters;
}

export namespace FineTuningParameters {
  export type AsObject = {
    modelId: string,
    weight: number,
  }
}

export class ImageParameters extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number;
  setHeight(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number;
  setWidth(value: number): void;

  clearSeedList(): void;
  getSeedList(): Array<number>;
  setSeedList(value: Array<number>): void;
  addSeed(value: number, index?: number): number;

  hasSamples(): boolean;
  clearSamples(): void;
  getSamples(): number;
  setSamples(value: number): void;

  hasSteps(): boolean;
  clearSteps(): void;
  getSteps(): number;
  setSteps(value: number): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): TransformType | undefined;
  setTransform(value?: TransformType): void;

  clearParametersList(): void;
  getParametersList(): Array<StepParameter>;
  setParametersList(value: Array<StepParameter>): void;
  addParameters(value?: StepParameter, index?: number): StepParameter;

  hasMaskedAreaInit(): boolean;
  clearMaskedAreaInit(): void;
  getMaskedAreaInit(): MaskedAreaInitMap[keyof MaskedAreaInitMap];
  setMaskedAreaInit(value: MaskedAreaInitMap[keyof MaskedAreaInitMap]): void;

  hasWeightMethod(): boolean;
  clearWeightMethod(): void;
  getWeightMethod(): WeightMethodMap[keyof WeightMethodMap];
  setWeightMethod(value: WeightMethodMap[keyof WeightMethodMap]): void;

  hasQuantize(): boolean;
  clearQuantize(): void;
  getQuantize(): boolean;
  setQuantize(value: boolean): void;

  hasAdapter(): boolean;
  clearAdapter(): void;
  getAdapter(): T2IAdapterParameter | undefined;
  setAdapter(value?: T2IAdapterParameter): void;

  clearFineTuningParametersList(): void;
  getFineTuningParametersList(): Array<FineTuningParameters>;
  setFineTuningParametersList(value: Array<FineTuningParameters>): void;
  addFineTuningParameters(value?: FineTuningParameters, index?: number): FineTuningParameters;

  hasContentCredentialsParameters(): boolean;
  clearContentCredentialsParameters(): void;
  getContentCredentialsParameters(): ContentCredentialsParameters | undefined;
  setContentCredentialsParameters(value?: ContentCredentialsParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ImageParameters): ImageParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageParameters;
  static deserializeBinaryFromReader(message: ImageParameters, reader: jspb.BinaryReader): ImageParameters;
}

export namespace ImageParameters {
  export type AsObject = {
    height: number,
    width: number,
    seedList: Array<number>,
    samples: number,
    steps: number,
    transform?: TransformType.AsObject,
    parametersList: Array<StepParameter.AsObject>,
    maskedAreaInit: MaskedAreaInitMap[keyof MaskedAreaInitMap],
    weightMethod: WeightMethodMap[keyof WeightMethodMap],
    quantize: boolean,
    adapter?: T2IAdapterParameter.AsObject,
    fineTuningParametersList: Array<FineTuningParameters.AsObject>,
    contentCredentialsParameters?: ContentCredentialsParameters.AsObject,
  }
}

export class ClassifierConcept extends jspb.Message {
  getConcept(): string;
  setConcept(value: string): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): number;
  setThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifierConcept.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifierConcept): ClassifierConcept.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifierConcept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifierConcept;
  static deserializeBinaryFromReader(message: ClassifierConcept, reader: jspb.BinaryReader): ClassifierConcept;
}

export namespace ClassifierConcept {
  export type AsObject = {
    concept: string,
    threshold: number,
  }
}

export class ClassifierCategory extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearConceptsList(): void;
  getConceptsList(): Array<ClassifierConcept>;
  setConceptsList(value: Array<ClassifierConcept>): void;
  addConcepts(value?: ClassifierConcept, index?: number): ClassifierConcept;

  hasAdjustment(): boolean;
  clearAdjustment(): void;
  getAdjustment(): number;
  setAdjustment(value: number): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): ActionMap[keyof ActionMap];
  setAction(value: ActionMap[keyof ActionMap]): void;

  hasClassifierMode(): boolean;
  clearClassifierMode(): void;
  getClassifierMode(): ClassifierModeMap[keyof ClassifierModeMap];
  setClassifierMode(value: ClassifierModeMap[keyof ClassifierModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifierCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifierCategory): ClassifierCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifierCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifierCategory;
  static deserializeBinaryFromReader(message: ClassifierCategory, reader: jspb.BinaryReader): ClassifierCategory;
}

export namespace ClassifierCategory {
  export type AsObject = {
    name: string,
    conceptsList: Array<ClassifierConcept.AsObject>,
    adjustment: number,
    action: ActionMap[keyof ActionMap],
    classifierMode: ClassifierModeMap[keyof ClassifierModeMap],
  }
}

export class ClassifierParameters extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<ClassifierCategory>;
  setCategoriesList(value: Array<ClassifierCategory>): void;
  addCategories(value?: ClassifierCategory, index?: number): ClassifierCategory;

  clearExceedsList(): void;
  getExceedsList(): Array<ClassifierCategory>;
  setExceedsList(value: Array<ClassifierCategory>): void;
  addExceeds(value?: ClassifierCategory, index?: number): ClassifierCategory;

  hasRealizedAction(): boolean;
  clearRealizedAction(): void;
  getRealizedAction(): ActionMap[keyof ActionMap];
  setRealizedAction(value: ActionMap[keyof ActionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifierParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifierParameters): ClassifierParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifierParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifierParameters;
  static deserializeBinaryFromReader(message: ClassifierParameters, reader: jspb.BinaryReader): ClassifierParameters;
}

export namespace ClassifierParameters {
  export type AsObject = {
    categoriesList: Array<ClassifierCategory.AsObject>,
    exceedsList: Array<ClassifierCategory.AsObject>,
    realizedAction: ActionMap[keyof ActionMap],
  }
}

export class InterpolateParameters extends jspb.Message {
  clearRatiosList(): void;
  getRatiosList(): Array<number>;
  setRatiosList(value: Array<number>): void;
  addRatios(value: number, index?: number): number;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): InterpolateModeMap[keyof InterpolateModeMap];
  setMode(value: InterpolateModeMap[keyof InterpolateModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterpolateParameters.AsObject;
  static toObject(includeInstance: boolean, msg: InterpolateParameters): InterpolateParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterpolateParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterpolateParameters;
  static deserializeBinaryFromReader(message: InterpolateParameters, reader: jspb.BinaryReader): InterpolateParameters;
}

export namespace InterpolateParameters {
  export type AsObject = {
    ratiosList: Array<number>,
    mode: InterpolateModeMap[keyof InterpolateModeMap],
  }
}

export class TransformColorAdjust extends jspb.Message {
  hasBrightness(): boolean;
  clearBrightness(): void;
  getBrightness(): number;
  setBrightness(value: number): void;

  hasContrast(): boolean;
  clearContrast(): void;
  getContrast(): number;
  setContrast(value: number): void;

  hasHue(): boolean;
  clearHue(): void;
  getHue(): number;
  setHue(value: number): void;

  hasSaturation(): boolean;
  clearSaturation(): void;
  getSaturation(): number;
  setSaturation(value: number): void;

  hasLightness(): boolean;
  clearLightness(): void;
  getLightness(): number;
  setLightness(value: number): void;

  hasMatchImage(): boolean;
  clearMatchImage(): void;
  getMatchImage(): Artifact | undefined;
  setMatchImage(value?: Artifact): void;

  hasMatchMode(): boolean;
  clearMatchMode(): void;
  getMatchMode(): ColorMatchModeMap[keyof ColorMatchModeMap];
  setMatchMode(value: ColorMatchModeMap[keyof ColorMatchModeMap]): void;

  hasNoiseAmount(): boolean;
  clearNoiseAmount(): void;
  getNoiseAmount(): number;
  setNoiseAmount(value: number): void;

  hasNoiseSeed(): boolean;
  clearNoiseSeed(): void;
  getNoiseSeed(): number;
  setNoiseSeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformColorAdjust.AsObject;
  static toObject(includeInstance: boolean, msg: TransformColorAdjust): TransformColorAdjust.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformColorAdjust, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformColorAdjust;
  static deserializeBinaryFromReader(message: TransformColorAdjust, reader: jspb.BinaryReader): TransformColorAdjust;
}

export namespace TransformColorAdjust {
  export type AsObject = {
    brightness: number,
    contrast: number,
    hue: number,
    saturation: number,
    lightness: number,
    matchImage?: Artifact.AsObject,
    matchMode: ColorMatchModeMap[keyof ColorMatchModeMap],
    noiseAmount: number,
    noiseSeed: number,
  }
}

export class TransformDepthCalc extends jspb.Message {
  hasBlendWeight(): boolean;
  clearBlendWeight(): void;
  getBlendWeight(): number;
  setBlendWeight(value: number): void;

  hasBlurRadius(): boolean;
  clearBlurRadius(): void;
  getBlurRadius(): number;
  setBlurRadius(value: number): void;

  hasReverse(): boolean;
  clearReverse(): void;
  getReverse(): boolean;
  setReverse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformDepthCalc.AsObject;
  static toObject(includeInstance: boolean, msg: TransformDepthCalc): TransformDepthCalc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformDepthCalc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformDepthCalc;
  static deserializeBinaryFromReader(message: TransformDepthCalc, reader: jspb.BinaryReader): TransformDepthCalc;
}

export namespace TransformDepthCalc {
  export type AsObject = {
    blendWeight: number,
    blurRadius: number,
    reverse: boolean,
  }
}

export class TransformMatrix extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: TransformMatrix): TransformMatrix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformMatrix;
  static deserializeBinaryFromReader(message: TransformMatrix, reader: jspb.BinaryReader): TransformMatrix;
}

export namespace TransformMatrix {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class TransformResample extends jspb.Message {
  getBorderMode(): BorderModeMap[keyof BorderModeMap];
  setBorderMode(value: BorderModeMap[keyof BorderModeMap]): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): TransformMatrix | undefined;
  setTransform(value?: TransformMatrix): void;

  hasPrevTransform(): boolean;
  clearPrevTransform(): void;
  getPrevTransform(): TransformMatrix | undefined;
  setPrevTransform(value?: TransformMatrix): void;

  hasDepthWarp(): boolean;
  clearDepthWarp(): void;
  getDepthWarp(): number;
  setDepthWarp(value: number): void;

  hasExportMask(): boolean;
  clearExportMask(): void;
  getExportMask(): boolean;
  setExportMask(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformResample.AsObject;
  static toObject(includeInstance: boolean, msg: TransformResample): TransformResample.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformResample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformResample;
  static deserializeBinaryFromReader(message: TransformResample, reader: jspb.BinaryReader): TransformResample;
}

export namespace TransformResample {
  export type AsObject = {
    borderMode: BorderModeMap[keyof BorderModeMap],
    transform?: TransformMatrix.AsObject,
    prevTransform?: TransformMatrix.AsObject,
    depthWarp: number,
    exportMask: boolean,
  }
}

export class CameraParameters extends jspb.Message {
  getCameraType(): CameraTypeMap[keyof CameraTypeMap];
  setCameraType(value: CameraTypeMap[keyof CameraTypeMap]): void;

  getNearPlane(): number;
  setNearPlane(value: number): void;

  getFarPlane(): number;
  setFarPlane(value: number): void;

  hasFov(): boolean;
  clearFov(): void;
  getFov(): number;
  setFov(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CameraParameters.AsObject;
  static toObject(includeInstance: boolean, msg: CameraParameters): CameraParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CameraParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CameraParameters;
  static deserializeBinaryFromReader(message: CameraParameters, reader: jspb.BinaryReader): CameraParameters;
}

export namespace CameraParameters {
  export type AsObject = {
    cameraType: CameraTypeMap[keyof CameraTypeMap],
    nearPlane: number,
    farPlane: number,
    fov: number,
  }
}

export class TransformCameraPose extends jspb.Message {
  hasWorldToViewMatrix(): boolean;
  clearWorldToViewMatrix(): void;
  getWorldToViewMatrix(): TransformMatrix | undefined;
  setWorldToViewMatrix(value?: TransformMatrix): void;

  hasCameraParameters(): boolean;
  clearCameraParameters(): void;
  getCameraParameters(): CameraParameters | undefined;
  setCameraParameters(value?: CameraParameters): void;

  getDoPrefill(): boolean;
  setDoPrefill(value: boolean): void;

  getRenderMode(): RenderModeMap[keyof RenderModeMap];
  setRenderMode(value: RenderModeMap[keyof RenderModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformCameraPose.AsObject;
  static toObject(includeInstance: boolean, msg: TransformCameraPose): TransformCameraPose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformCameraPose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformCameraPose;
  static deserializeBinaryFromReader(message: TransformCameraPose, reader: jspb.BinaryReader): TransformCameraPose;
}

export namespace TransformCameraPose {
  export type AsObject = {
    worldToViewMatrix?: TransformMatrix.AsObject,
    cameraParameters?: CameraParameters.AsObject,
    doPrefill: boolean,
    renderMode: RenderModeMap[keyof RenderModeMap],
  }
}

export class TransformParameters extends jspb.Message {
  hasColorAdjust(): boolean;
  clearColorAdjust(): void;
  getColorAdjust(): TransformColorAdjust | undefined;
  setColorAdjust(value?: TransformColorAdjust): void;

  hasDepthCalc(): boolean;
  clearDepthCalc(): void;
  getDepthCalc(): TransformDepthCalc | undefined;
  setDepthCalc(value?: TransformDepthCalc): void;

  hasResample(): boolean;
  clearResample(): void;
  getResample(): TransformResample | undefined;
  setResample(value?: TransformResample): void;

  hasCameraPose(): boolean;
  clearCameraPose(): void;
  getCameraPose(): TransformCameraPose | undefined;
  setCameraPose(value?: TransformCameraPose): void;

  getTransformCase(): TransformParameters.TransformCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformParameters.AsObject;
  static toObject(includeInstance: boolean, msg: TransformParameters): TransformParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformParameters;
  static deserializeBinaryFromReader(message: TransformParameters, reader: jspb.BinaryReader): TransformParameters;
}

export namespace TransformParameters {
  export type AsObject = {
    colorAdjust?: TransformColorAdjust.AsObject,
    depthCalc?: TransformDepthCalc.AsObject,
    resample?: TransformResample.AsObject,
    cameraPose?: TransformCameraPose.AsObject,
  }

  export enum TransformCase {
    TRANSFORM_NOT_SET = 0,
    COLOR_ADJUST = 2,
    DEPTH_CALC = 4,
    RESAMPLE = 5,
    CAMERA_POSE = 6,
  }
}

export class AssetParameters extends jspb.Message {
  getAction(): AssetActionMap[keyof AssetActionMap];
  setAction(value: AssetActionMap[keyof AssetActionMap]): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  getUse(): AssetUseMap[keyof AssetUseMap];
  setUse(value: AssetUseMap[keyof AssetUseMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetParameters.AsObject;
  static toObject(includeInstance: boolean, msg: AssetParameters): AssetParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetParameters;
  static deserializeBinaryFromReader(message: AssetParameters, reader: jspb.BinaryReader): AssetParameters;
}

export namespace AssetParameters {
  export type AsObject = {
    action: AssetActionMap[keyof AssetActionMap],
    projectId: string,
    use: AssetUseMap[keyof AssetUseMap],
  }
}

export class AnswerMeta extends jspb.Message {
  hasGpuId(): boolean;
  clearGpuId(): void;
  getGpuId(): string;
  setGpuId(value: string): void;

  hasCpuId(): boolean;
  clearCpuId(): void;
  getCpuId(): string;
  setCpuId(value: string): void;

  hasNodeId(): boolean;
  clearNodeId(): void;
  getNodeId(): string;
  setNodeId(value: string): void;

  hasEngineId(): boolean;
  clearEngineId(): void;
  getEngineId(): string;
  setEngineId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerMeta.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerMeta): AnswerMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnswerMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerMeta;
  static deserializeBinaryFromReader(message: AnswerMeta, reader: jspb.BinaryReader): AnswerMeta;
}

export namespace AnswerMeta {
  export type AsObject = {
    gpuId: string,
    cpuId: string,
    nodeId: string,
    engineId: string,
  }
}

export class Answer extends jspb.Message {
  getAnswerId(): string;
  setAnswerId(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getReceived(): number;
  setReceived(value: number): void;

  getCreated(): number;
  setCreated(value: number): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): AnswerMeta | undefined;
  setMeta(value?: AnswerMeta): void;

  clearArtifactsList(): void;
  getArtifactsList(): Array<Artifact>;
  setArtifactsList(value: Array<Artifact>): void;
  addArtifacts(value?: Artifact, index?: number): Artifact;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    answerId: string,
    requestId: string,
    received: number,
    created: number,
    meta?: AnswerMeta.AsObject,
    artifactsList: Array<Artifact.AsObject>,
  }
}

export class AnswerBatch extends jspb.Message {
  getBatchId(): string;
  setBatchId(value: string): void;

  clearAnswersList(): void;
  getAnswersList(): Array<Answer>;
  setAnswersList(value: Array<Answer>): void;
  addAnswers(value?: Answer, index?: number): Answer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnswerBatch.AsObject;
  static toObject(includeInstance: boolean, msg: AnswerBatch): AnswerBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnswerBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnswerBatch;
  static deserializeBinaryFromReader(message: AnswerBatch, reader: jspb.BinaryReader): AnswerBatch;
}

export namespace AnswerBatch {
  export type AsObject = {
    batchId: string,
    answersList: Array<Answer.AsObject>,
  }
}

export class Request extends jspb.Message {
  getEngineId(): string;
  setEngineId(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getRequestedType(): ArtifactTypeMap[keyof ArtifactTypeMap];
  setRequestedType(value: ArtifactTypeMap[keyof ArtifactTypeMap]): void;

  clearPromptList(): void;
  getPromptList(): Array<Prompt>;
  setPromptList(value: Array<Prompt>): void;
  addPrompt(value?: Prompt, index?: number): Prompt;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ImageParameters | undefined;
  setImage(value?: ImageParameters): void;

  hasClassifier(): boolean;
  clearClassifier(): void;
  getClassifier(): ClassifierParameters | undefined;
  setClassifier(value?: ClassifierParameters): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): AssetParameters | undefined;
  setAsset(value?: AssetParameters): void;

  hasInterpolate(): boolean;
  clearInterpolate(): void;
  getInterpolate(): InterpolateParameters | undefined;
  setInterpolate(value?: InterpolateParameters): void;

  hasTransform(): boolean;
  clearTransform(): void;
  getTransform(): TransformParameters | undefined;
  setTransform(value?: TransformParameters): void;

  hasConditioner(): boolean;
  clearConditioner(): void;
  getConditioner(): ConditionerParameters | undefined;
  setConditioner(value?: ConditionerParameters): void;

  hasExtras(): boolean;
  clearExtras(): void;
  getExtras(): google_protobuf_struct_pb.Struct | undefined;
  setExtras(value?: google_protobuf_struct_pb.Struct): void;

  getParamsCase(): Request.ParamsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    engineId: string,
    requestId: string,
    requestedType: ArtifactTypeMap[keyof ArtifactTypeMap],
    promptList: Array<Prompt.AsObject>,
    image?: ImageParameters.AsObject,
    classifier?: ClassifierParameters.AsObject,
    asset?: AssetParameters.AsObject,
    interpolate?: InterpolateParameters.AsObject,
    transform?: TransformParameters.AsObject,
    conditioner?: ConditionerParameters.AsObject,
    extras?: google_protobuf_struct_pb.Struct.AsObject,
  }

  export enum ParamsCase {
    PARAMS_NOT_SET = 0,
    IMAGE = 5,
    CLASSIFIER = 7,
    ASSET = 8,
    INTERPOLATE = 11,
    TRANSFORM = 12,
  }
}

export class OnStatus extends jspb.Message {
  clearReasonList(): void;
  getReasonList(): Array<FinishReasonMap[keyof FinishReasonMap]>;
  setReasonList(value: Array<FinishReasonMap[keyof FinishReasonMap]>): void;
  addReason(value: FinishReasonMap[keyof FinishReasonMap], index?: number): FinishReasonMap[keyof FinishReasonMap];

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): string;
  setTarget(value: string): void;

  clearActionList(): void;
  getActionList(): Array<StageActionMap[keyof StageActionMap]>;
  setActionList(value: Array<StageActionMap[keyof StageActionMap]>): void;
  addAction(value: StageActionMap[keyof StageActionMap], index?: number): StageActionMap[keyof StageActionMap];

  hasArtifactType(): boolean;
  clearArtifactType(): void;
  getArtifactType(): ArtifactTypeFilter | undefined;
  setArtifactType(value?: ArtifactTypeFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnStatus.AsObject;
  static toObject(includeInstance: boolean, msg: OnStatus): OnStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnStatus;
  static deserializeBinaryFromReader(message: OnStatus, reader: jspb.BinaryReader): OnStatus;
}

export namespace OnStatus {
  export type AsObject = {
    reasonList: Array<FinishReasonMap[keyof FinishReasonMap]>,
    target: string,
    actionList: Array<StageActionMap[keyof StageActionMap]>,
    artifactType?: ArtifactTypeFilter.AsObject,
  }
}

export class ArtifactTypeFilter extends jspb.Message {
  clearIncludeList(): void;
  getIncludeList(): Array<ArtifactTypeMap[keyof ArtifactTypeMap]>;
  setIncludeList(value: Array<ArtifactTypeMap[keyof ArtifactTypeMap]>): void;
  addInclude(value: ArtifactTypeMap[keyof ArtifactTypeMap], index?: number): ArtifactTypeMap[keyof ArtifactTypeMap];

  clearExcludeList(): void;
  getExcludeList(): Array<ArtifactTypeMap[keyof ArtifactTypeMap]>;
  setExcludeList(value: Array<ArtifactTypeMap[keyof ArtifactTypeMap]>): void;
  addExclude(value: ArtifactTypeMap[keyof ArtifactTypeMap], index?: number): ArtifactTypeMap[keyof ArtifactTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArtifactTypeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ArtifactTypeFilter): ArtifactTypeFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArtifactTypeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArtifactTypeFilter;
  static deserializeBinaryFromReader(message: ArtifactTypeFilter, reader: jspb.BinaryReader): ArtifactTypeFilter;
}

export namespace ArtifactTypeFilter {
  export type AsObject = {
    includeList: Array<ArtifactTypeMap[keyof ArtifactTypeMap]>,
    excludeList: Array<ArtifactTypeMap[keyof ArtifactTypeMap]>,
  }
}

export class Stage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): Request | undefined;
  setRequest(value?: Request): void;

  clearOnStatusList(): void;
  getOnStatusList(): Array<OnStatus>;
  setOnStatusList(value: Array<OnStatus>): void;
  addOnStatus(value?: OnStatus, index?: number): OnStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stage.AsObject;
  static toObject(includeInstance: boolean, msg: Stage): Stage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stage;
  static deserializeBinaryFromReader(message: Stage, reader: jspb.BinaryReader): Stage;
}

export namespace Stage {
  export type AsObject = {
    id: string,
    request?: Request.AsObject,
    onStatusList: Array<OnStatus.AsObject>,
  }
}

export class ChainRequest extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  clearStageList(): void;
  getStageList(): Array<Stage>;
  setStageList(value: Array<Stage>): void;
  addStage(value?: Stage, index?: number): Stage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChainRequest): ChainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainRequest;
  static deserializeBinaryFromReader(message: ChainRequest, reader: jspb.BinaryReader): ChainRequest;
}

export namespace ChainRequest {
  export type AsObject = {
    requestId: string,
    stageList: Array<Stage.AsObject>,
  }
}

export interface FinishReasonMap {
  NULL: 0;
  LENGTH: 1;
  STOP: 2;
  ERROR: 3;
  FILTER: 4;
}

export const FinishReason: FinishReasonMap;

export interface ArtifactTypeMap {
  ARTIFACT_NONE: 0;
  ARTIFACT_IMAGE: 1;
  ARTIFACT_VIDEO: 2;
  ARTIFACT_TEXT: 3;
  ARTIFACT_TOKENS: 4;
  ARTIFACT_EMBEDDING: 5;
  ARTIFACT_CLASSIFICATIONS: 6;
  ARTIFACT_MASK: 7;
  ARTIFACT_LATENT: 8;
  ARTIFACT_TENSOR: 9;
  ARTIFACT_DEPTH: 10;
  ARTIFACT_3D_MODEL: 11;
  ARTIFACT_AUDIO: 12;
}

export const ArtifactType: ArtifactTypeMap;

export interface MaskedAreaInitMap {
  MASKED_AREA_INIT_ZERO: 0;
  MASKED_AREA_INIT_RANDOM: 1;
  MASKED_AREA_INIT_ORIGINAL: 2;
}

export const MaskedAreaInit: MaskedAreaInitMap;

export interface WeightMethodMap {
  TEXT_ENCODER: 0;
  CROSS_ATTENTION: 1;
}

export const WeightMethod: WeightMethodMap;

export interface DiffusionSamplerMap {
  SAMPLER_DDIM: 0;
  SAMPLER_DDPM: 1;
  SAMPLER_K_EULER: 2;
  SAMPLER_K_EULER_ANCESTRAL: 3;
  SAMPLER_K_HEUN: 4;
  SAMPLER_K_DPM_2: 5;
  SAMPLER_K_DPM_2_ANCESTRAL: 6;
  SAMPLER_K_LMS: 7;
  SAMPLER_K_DPMPP_2S_ANCESTRAL: 8;
  SAMPLER_K_DPMPP_2M: 9;
  SAMPLER_K_DPMPP_SDE: 10;
}

export const DiffusionSampler: DiffusionSamplerMap;

export interface UpscalerMap {
  UPSCALER_RGB: 0;
  UPSCALER_GFPGAN: 1;
  UPSCALER_ESRGAN: 2;
}

export const Upscaler: UpscalerMap;

export interface GuidancePresetMap {
  GUIDANCE_PRESET_NONE: 0;
  GUIDANCE_PRESET_SIMPLE: 1;
  GUIDANCE_PRESET_FAST_BLUE: 2;
  GUIDANCE_PRESET_FAST_GREEN: 3;
  GUIDANCE_PRESET_SLOW: 4;
  GUIDANCE_PRESET_SLOWER: 5;
  GUIDANCE_PRESET_SLOWEST: 6;
}

export const GuidancePreset: GuidancePresetMap;

export interface ModelArchitectureMap {
  MODEL_ARCHITECTURE_NONE: 0;
  MODEL_ARCHITECTURE_CLIP_VIT: 1;
  MODEL_ARCHITECTURE_CLIP_RESNET: 2;
  MODEL_ARCHITECTURE_LDM: 3;
}

export const ModelArchitecture: ModelArchitectureMap;

export interface T2IAdapterMap {
  T2IADAPTER_NONE: 0;
  T2IADAPTER_SKETCH: 1;
  T2IADAPTER_DEPTH: 2;
  T2IADAPTER_CANNY: 3;
}

export const T2IAdapter: T2IAdapterMap;

export interface T2IAdapterInitMap {
  T2IADAPTERINIT_IMAGE: 0;
  T2IADAPTERINIT_ADAPTER_IMAGE: 1;
}

export const T2IAdapterInit: T2IAdapterInitMap;

export interface ActionMap {
  ACTION_PASSTHROUGH: 0;
  ACTION_REGENERATE_DUPLICATE: 1;
  ACTION_REGENERATE: 2;
  ACTION_OBFUSCATE_DUPLICATE: 3;
  ACTION_OBFUSCATE: 4;
  ACTION_DISCARD: 5;
}

export const Action: ActionMap;

export interface ClassifierModeMap {
  CLSFR_MODE_ZEROSHOT: 0;
  CLSFR_MODE_MULTICLASS: 1;
}

export const ClassifierMode: ClassifierModeMap;

export interface InterpolateModeMap {
  INTERPOLATE_LINEAR: 0;
  INTERPOLATE_RIFE: 1;
  INTERPOLATE_VAE_LINEAR: 2;
  INTERPOLATE_VAE_SLERP: 3;
  INTERPOLATE_FILM: 4;
}

export const InterpolateMode: InterpolateModeMap;

export interface BorderModeMap {
  BORDER_REFLECT: 0;
  BORDER_REPLICATE: 1;
  BORDER_WRAP: 2;
  BORDER_ZERO: 3;
  BORDER_PREFILL: 4;
}

export const BorderMode: BorderModeMap;

export interface ColorMatchModeMap {
  COLOR_MATCH_HSV: 0;
  COLOR_MATCH_LAB: 1;
  COLOR_MATCH_RGB: 2;
}

export const ColorMatchMode: ColorMatchModeMap;

export interface CameraTypeMap {
  CAMERA_PERSPECTIVE: 0;
  CAMERA_ORTHOGRAPHIC: 1;
}

export const CameraType: CameraTypeMap;

export interface RenderModeMap {
  RENDER_MESH: 0;
  RENDER_POINTCLOUD: 1;
}

export const RenderMode: RenderModeMap;

export interface AssetActionMap {
  ASSET_PUT: 0;
  ASSET_GET: 1;
  ASSET_DELETE: 2;
}

export const AssetAction: AssetActionMap;

export interface AssetUseMap {
  ASSET_USE_UNDEFINED: 0;
  ASSET_USE_INPUT: 1;
  ASSET_USE_OUTPUT: 2;
  ASSET_USE_INTERMEDIATE: 3;
  ASSET_USE_PROJECT: 4;
}

export const AssetUse: AssetUseMap;

export interface StageActionMap {
  STAGE_ACTION_PASS: 0;
  STAGE_ACTION_DISCARD: 1;
  STAGE_ACTION_RETURN: 2;
}

export const StageAction: StageActionMap;

